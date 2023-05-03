import { z } from 'zod'
import { ContainerSearch, Form, Input, TitlePublicacion } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IssueContext } from '../../context/IssueContext'
import { useContext } from 'react'

const publicationFormSchema = z.object({
  query: z.string(),
})

type PublicationFormData = z.infer<typeof publicationFormSchema>

interface SearchProps {
  amountIssue: number
}

export const Search = ({ amountIssue }: SearchProps) => {
  const { fetchIssue } = useContext(IssueContext)

  const { register, handleSubmit } = useForm<PublicationFormData>({
    resolver: zodResolver(publicationFormSchema),
  })

  async function handleSearchPublication(data: PublicationFormData) {
    await fetchIssue(data.query)
  }

  return (
    <ContainerSearch>
      <TitlePublicacion>
        <h2>Publicações</h2>
        <span>
          {amountIssue} {amountIssue > 1 ? 'publicações' : 'publicação'}
        </span>
      </TitlePublicacion>
      <Form onSubmit={handleSubmit(handleSearchPublication)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </Form>
    </ContainerSearch>
  )
}
