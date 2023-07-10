export function wrapper(prepend: string, fn: () => void) {
  try {
    return fn();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${prepend}\n${error.message}`);
    }
    throw error;
  }
}
