import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ProfileHeader() {
  const profileImage = siteConfig.logoImage ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="profile-image" src={siteConfig.logoImage} alt={`${siteConfig.brand} logo`} />
  ) : <span className="profile-fallback" aria-label="Brand logo placeholder"><span /></span>;

  return (
    <header className="profile-header">
      <div className="profile-image-wrap">{profileImage}</div>
      <p className="profile-brand">{siteConfig.brand}</p>
      <div className="profile-social">
        <span>{siteConfig.instagramHandle}</span>
        {siteConfig.instagramUrl ? <a href={siteConfig.instagramUrl} aria-label={`Open ${siteConfig.brand} on Instagram`}><Instagram size={15} /></a> : <Instagram size={15} aria-label="Instagram profile link not configured" />}
      </div>
    </header>
  );
}
