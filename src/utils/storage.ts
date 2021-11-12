const COMPANIES = 'companies'

export const storageSetCompanies = (serializedData: string): void => localStorage.setItem(COMPANIES, serializedData)
export const storageGetCompanies = (): string | null => localStorage.getItem(COMPANIES)
export const storageDeleteCompanies = (): void => localStorage.removeItem(COMPANIES)
