import { Button } from "./components/ui/button";
import { Github } from 'lucide-react'
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="header" className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido with ❤️</span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div></div>
      </main>
    </div>
  )
}

