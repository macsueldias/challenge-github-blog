import { ArrowSquareOut } from '@phosphor-icons/react'
import {
  ContainerHeader,
  Banner,
  InfoProfile,
  GroupListSocial,
  ItemSocial,
  TitleProfile,
  Profile,
  DescriptionProfile,
} from './styles'

export const Header = () => {
  return (
    <ContainerHeader>
      <Banner>
        <img src="../../../src/assets/cover.png" alt="testes" />
      </Banner>
      <Profile>
        <img src="https://github.com/macsueldias.png" alt="testes" />
        <InfoProfile>
          <TitleProfile>
            <h2>Macsuel Dias</h2>
            <p>
              GITHUB <ArrowSquareOut size={16} style={{ fontWeight: 'bold' }} />
            </p>
          </TitleProfile>
          <DescriptionProfile>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </DescriptionProfile>
          <GroupListSocial>
            <ItemSocial>
              <img src="../../../src/assets/icons/github.svg" alt="Github" />
              macsueldias
            </ItemSocial>
            <ItemSocial>
              <img src="../../../src/assets/icons/building.svg" alt="Build" />
              TBRWEB
            </ItemSocial>
            <ItemSocial>
              <img src="../../../src/assets/icons/user-group.svg" alt="Users" />
              seguidores
            </ItemSocial>
          </GroupListSocial>
        </InfoProfile>
      </Profile>
    </ContainerHeader>
  )
}
