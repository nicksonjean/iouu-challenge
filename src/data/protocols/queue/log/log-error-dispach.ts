export interface LogErrorDispach {
  logError: (stack: string) => Promise<void>
}
