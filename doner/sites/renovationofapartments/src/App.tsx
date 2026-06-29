import { ArrowRight, Blocks, KeyRound, Sparkles } from 'lucide-react'

import './App.css'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const setupItems = [
  {
    title: 'React and Vite',
    description: 'Base application scaffolded and ready for fast local UI work.',
    icon: Blocks,
  },
  {
    title: 'Tailwind and shadcn',
    description: 'Design tokens, component aliases, cn utility, and starter UI primitives.',
    icon: Sparkles,
  },
  {
    title: '21st.dev tools',
    description: 'Magic MCP and registry CLI are installed; API key can be added later.',
    icon: KeyRound,
  },
]

function App() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-center gap-8">
        <div className="max-w-3xl space-y-5">
          <Badge variant="secondary">21st.dev ready workspace</Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Renovation UI workspace is ready for imported components.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              The project is configured for React, Tailwind, shadcn-style components,
              and 21st.dev registry workflows.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>
              Add a 21st component
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outline">Review setup notes</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {setupItems.map((item) => {
            const Icon = item.icon

            return (
              <Card key={item.title}>
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1.5 rounded-full bg-secondary">
                    <div className="h-full w-2/3 rounded-full bg-primary" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
