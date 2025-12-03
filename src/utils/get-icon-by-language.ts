import { FileCode2Icon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// You can expand this mapping based on your needs
const languageIconMap: Record<string, LucideIcon> = {
  typescript: FileCode2Icon,
  javascript: FileCode2Icon,
  tsx: FileCode2Icon,
  jsx: FileCode2Icon,
  ts: FileCode2Icon,
  js: FileCode2Icon,
  python: FileCode2Icon,
  py: FileCode2Icon,
  rust: FileCode2Icon,
  rs: FileCode2Icon,
  go: FileCode2Icon,
  java: FileCode2Icon,
  cpp: FileCode2Icon,
  c: FileCode2Icon,
  css: FileCode2Icon,
  html: FileCode2Icon,
  json: FileCode2Icon,
  yaml: FileCode2Icon,
  yml: FileCode2Icon,
  markdown: FileCode2Icon,
  md: FileCode2Icon,
  bash: FileCode2Icon,
  sh: FileCode2Icon,
  sql: FileCode2Icon,
  // Add more language mappings as needed
}

export function getIconByLanguage(language: string): LucideIcon {
  const normalizedLang = language.toLowerCase().trim()
  return languageIconMap[normalizedLang] ?? FileCode2Icon
}