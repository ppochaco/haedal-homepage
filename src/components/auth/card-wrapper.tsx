import { BackButton } from '@/components/auth/back-button'
import { Social } from '@/components/auth/social'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

interface CardWraperProps {
  children: React.ReactNode
  headerTitle: string
  headerDescription: string
  buttonLabel: string
  buttonHref: string
}

export const CardWraper = ({
  children,
  headerTitle,
  headerDescription,
  buttonLabel,
  buttonHref,
}: CardWraperProps) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Social />
      </CardFooter>
      <CardFooter>
        <BackButton href={buttonHref} label={buttonLabel} />
      </CardFooter>
    </Card>
  )
}
