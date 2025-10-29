import { CheckCheckIcon, ClipboardIcon, LoaderIcon } from 'lucide-react'
import { type ComponentProps, useEffect, useState, useTransition } from 'react'
import { codeToHtml } from 'shiki'
import { cn } from '../../lib/utils'
import { IconButton } from './icon-button'

interface CodeBlockProps extends ComponentProps<'div'> {
  code: string
  language?: string
}

export function CodeBlock({
  className,
  code,
  language = 'json',
  ...props
}: CodeBlockProps) {
  const [parsedCode, setParsedCode] = useState('')

  const [isCopingContent, startCopy] = useTransition()
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (code) {
      codeToHtml(code, { lang: language, theme: 'vesper' }).then(setParsedCode)
    }
  }, [code, language])

  return (
    <div
      className={cn(
        'relative rounded-lg border border-zinc-700 overflow-x-auto group',
        className,
      )}
      {...props}
    >
      <div
        className="[&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: parsedCode,
        }}
      />

      <IconButton
        className={cn(
          'absolute top-2 right-2 opacity-0 group-hover:opacity-100',
          (isCopingContent || isCopied) && 'opacity-100 bg-zinc-700',
        )}
        onClick={() => {
          startCopy(async () => {
            await navigator.clipboard.writeText(code)
            setIsCopied(true)

            setTimeout(() => {
              setIsCopied(false)
            }, 1_500)
          })
        }}
        icon={
          isCopingContent ? (
            <LoaderIcon className="size-4 animate-spin" />
          ) : isCopied ? (
            <CheckCheckIcon className="size-4" />
          ) : (
            <ClipboardIcon className="size-4" />
          )
        }
      />
    </div>
  )
}
