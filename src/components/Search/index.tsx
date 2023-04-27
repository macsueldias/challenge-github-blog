import { ContainerSearch, Form, Input } from './styles'

export const Search = () => {
  return (
    <ContainerSearch>
      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <Form>
        <Input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </ContainerSearch>
  )
}
