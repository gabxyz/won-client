import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Oops...this page does not exist. Go back to the store and explore great games and offers."
          hasLink
        />
      </Container>
    </Base>
  )
}
