import Link, {LinkProps} from 'next/link'
import Image, {ImageProps} from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { Code } from 'bright'

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...(props as LinkProps)} href={props.href!}>
        {children}
      </Link>
    )
  },
  img: ({ children, ...props }) => {
    // You need to do some work here to get the width and height of the image.
    // See the details below for my solution.
    return <Image {...(props as ImageProps)} />
  },
  pre: Code,
  // any other components you want to use in your markdown
}


