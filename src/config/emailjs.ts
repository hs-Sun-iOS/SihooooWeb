/** EmailJS 模板中需包含变量：{{from_name}}、{{from_email}}、{{message}} */
export function getEmailJsConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "",
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  };
}

export function isEmailJsConfigured(): boolean {
  const c = getEmailJsConfig();
  return Boolean(c.publicKey && c.serviceId && c.templateId);
}

/** 从 EmailJS 抛出的异常中整理可读说明（便于排查域名白名单、模板 ID 等） */
export function formatEmailJsErrorDetail(err: unknown): string {
  if (typeof err === "string") return truncateDetail(err);
  if (err instanceof Error) return truncateDetail(err.message);
  if (err && typeof err === "object" && "text" in err) {
    const raw = String((err as { text: unknown }).text ?? "");
    const trimmed = raw.trim();
    if (!trimmed) return "";
    try {
      const obj = JSON.parse(trimmed) as Record<string, unknown>;
      const bits: string[] = [];
      if (typeof obj.status === "number") bits.push(`HTTP ${obj.status}`);
      if (typeof obj.text === "string") bits.push(obj.text);
      if (typeof obj.message === "string") bits.push(obj.message);
      if (bits.length) return truncateDetail(bits.join(" · "));
    } catch {
      /* 非 JSON，原样截断 */
    }
    return truncateDetail(trimmed);
  }
  return "";
}

function truncateDetail(s: string, max = 240): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max)}…`;
}
