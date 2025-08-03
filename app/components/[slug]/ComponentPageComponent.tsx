"use client"

import { ComponentClientPage } from "./ComponentClientPage"

interface ComponentPageComponentProps {
  params: {
    slug: string
  }
}

export function ComponentPageComponent({ params }: ComponentPageComponentProps) {
  return <ComponentClientPage slug={params.slug} />
}
