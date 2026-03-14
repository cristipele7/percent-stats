export const getOriginalError = (
    error: any,
): { status: number | undefined; message: string | undefined } => ({
    status: error?.errors?.[0]?.extensions?.status,
    message: error?.errors?.[0]?.message,
})
