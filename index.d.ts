/// <reference types="node" />

type ExecFileOptions = import('child_process').ExecFileOptions | import('child_process').ExecFileOptionsWithStringEncoding;

declare module "libreoffice-convert" {
  function convert(
    document: Buffer,
    format: string,
    filter: string | undefined,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
  function convertWithOptions(
    document: Buffer,
    format: string,
    filter: string | undefined,
    options: {
      tmpOptions?: Record<string | number | symbol, unknown>;
      asyncOptions?: { times?: number; interval?: number };
      sofficeBinaryPaths?: string[];
      execOptions?: ExecFileOptions;
    },
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
}
