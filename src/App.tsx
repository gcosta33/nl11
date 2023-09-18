import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

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
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder='Inclua o prompt para ia'
              className='resize-none p-4 leading-relaxed'
            />
            <Textarea
              placeholder='Resultado gerado pela ia'
              className='resize-none p-4 leading-relaxed'
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">Lembre-se: você pode usar a variável <code className="text-violet-400">{'${transcription}'}</code> para adicionar o conteúdo da transcrição do vídeo selecionado!</p>
        </div>
        <aside className="w-80 space-y-6 ">
          <form className='space-y-6'>
            <label
              htmlFor="video"
              className={`border flex rounded-md aspect-video items-center 
              justify-center cursor-pointer border-dashed text-sm flex-col
              text-muted-foreground hover:bg-primary/5`}
            >
              <FileVideo className='h-4 w-4' />
              Seleicone um vídeo
            </label>
            <input type="file" id='video' accept='video/mp4' className='sr-only' />

            <Separator />

            <div className='space-y-1'>
              <Label htmlFor='transcription_pront'>Prompt de comando</Label>
              <Textarea
                id='transcription_pront'
                className='h-20 leading-relaxed'
                placeholder='Inclua palavras-chave mencionadas no video separadas por vírgula ( , )'
              />
            </div>

            <Button type='submit' className='w-full'>
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>

            <Separator />

            <form className='space-y-6'>
              <div className='space-y-2'>
                <Label>Modelo</Label>
                <Select  >
                  <SelectTrigger >
                    <SelectValue placeholder="Selecione o prompt..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='title'>Titulo</SelectItem>
                    <SelectItem value='description'>Descrição</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label>Modelo</Label>
                <Select disabled defaultValue='gpt3.5'>
                  <SelectTrigger >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className='block text-sm text-muted-foreground italic'>
                  Você poderá customizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className='space-y-4'>
                <Label>Modelo</Label>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  defaultValue={[0.5]}
                />
                <span className='block text-sm text-muted-foreground italic'>
                  Valores mais altos tendem a deixar o resultado mais criato e com possiveis erros.
                </span>
              </div>

              <Separator />

              <Button type='submit' className='w-full'>
                Executar
                <Wand2 className='w-4 h-4 ml-2'/>
              </Button>
            </form>
          </form>
        </aside>
      </main>
    </div>
  )
}

