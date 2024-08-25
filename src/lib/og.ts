type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo,
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : '';
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.weaverwebs.netlify.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}