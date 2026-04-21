/** Normalize a perk's company name for display (strips "(via Partner)" suffixes). */
export function displayName(company: string): string {
  return company.replace(/\s*\(via\s+partner\)\s*/i, "").trim();
}
