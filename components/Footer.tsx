import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-bottom"><Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true"><span /></span><span>{siteConfig.brand}</span></Link><span>© {new Date().getFullYear()} {siteConfig.brand}</span></div>
    </footer>
  );
}
