/**
 * generate-covers.mjs
 *
 * Gera screenshots automáticos dos projetos Systems.
 * Salva em /public/covers/ no formato esperado pelo lib/cases.ts.
 *
 * Uso:
 *   pnpm add -D puppeteer
 *   npx puppeteer browsers install chrome
 *   node scripts/generate-covers.mjs
 *
 * Para regenerar um case específico:
 *   node scripts/generate-covers.mjs lbem-ufrj
 */

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/covers");

const TARGETS = [
  {
    slug: "colegio-joao-pedro-website",
    url: "https://colegio-joao-pedro.vercel.app",
    type: "vercel",
  },
  {
    slug: "netflix-genre-analysis",
    url: "https://analysis-genre-netflix.streamlit.app",
    type: "streamlit",
  },
  {
    slug: "extrator-pdf-aero",
    url: "https://extrator-pdf-aero.streamlit.app",
    type: "streamlit",
  },
  {
    slug: "linktree-carol",
    url: "https://linktree-carol.vercel.app",
    type: "vercel",
  },
  {
    slug: "linktree-agatha",
    url: "https://linktree-agatha.vercel.app",
    type: "vercel",
  },
  {
    slug: "lbem-ufrj",
    url: "https://lbem-vercel.app",
    type: "vercel",
  },
  { slug: "landing-page-cjp", url: "https://colegio-joao-pedro.vercel.app/lp", type: "vercel" },
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function wakeStreamlit(page) {
  // Procura qualquer botão na página
  const buttons = await page.$$("button");
  for (const btn of buttons) {
    const text = await page.evaluate((el) => el.textContent, btn);
    if (text && text.includes("back up")) {
      console.log("     💤 App dormindo — acordando...");
      await btn.click();

      // Aguarda o botão de wake sumir
      await page.waitForFunction(
        () => !Array.from(document.querySelectorAll("button"))
               .some((b) => b.textContent.includes("back up")),
        { timeout: 60000 }
      );

      console.log("     ⏳ Aguardando app carregar...");
      await wait(10000);
      return true;
    }
  }
  return false;
}

async function captureStreamlit(page, url) {
  await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
  const woke = await wakeStreamlit(page);
  if (woke) {
    await wait(6000);
  } else {
    await wait(5000);
  }
}

async function captureVercel(page, url) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  await wait(1500);
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  const targets = args.length
    ? TARGETS.filter((t) => args.includes(t.slug))
    : TARGETS;

  if (!targets.length) {
    console.error(`Slug não encontrado. Opções: ${TARGETS.map((t) => t.slug).join(", ")}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];

  for (const target of targets) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 1 });
    await page.addStyleTag({
      content: "::-webkit-scrollbar { display: none !important }",
    });

    const outputPath = path.join(OUTPUT_DIR, `${target.slug}.png`);

    try {
      console.log(`📸 Capturando ${target.slug} (${target.type})...`);

      if (target.type === "streamlit") {
        await captureStreamlit(page, target.url);
      } else {
        await captureVercel(page, target.url);
      }

      await page.screenshot({ path: outputPath, type: "png" });
      console.log(`   ✓ Salvo em public/covers/${target.slug}.png`);
      results.push({ slug: target.slug, ok: true });
    } catch (err) {
      console.error(`   ✗ Erro: ${err.message}`);
      results.push({ slug: target.slug, ok: false, error: err.message });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log("\n── Resumo ──────────────────────────────────────────");
  results.forEach(({ slug, ok, error }) => {
    console.log(ok ? `✓ ${slug}` : `✗ ${slug} — ${error}`);
  });

  const failed = results.filter((r) => !r.ok);
  if (failed.length) {
    console.log(`\n${failed.length} case(s) falharam. Tente novamente:`);
    console.log(`  node scripts/generate-covers.mjs ${failed.map((r) => r.slug).join(" ")}`);
  } else {
    console.log("\nTodos os covers gerados com sucesso.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
