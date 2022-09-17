import { 
  Avatar, 
  Text, 
  ListItem,
  UnorderedList,
  VStack,
  Divider,
  Heading,
} from '@chakra-ui/react'

import { avatarPhoto } from "../../utils/images";
import { bio } from "../../utils/api/bio";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      <Avatar size={'xl'} src={avatarPhoto} />
        <Text as="p" fontSize={'xl'} fontWeight='bold'>
          Panuwat Boonrod (New)
        </Text>
        <Text fontSize={'xl'}>Software Engineer</Text>
        <UnorderedList>
          {bio.map((data) =>  <ListItem key={data.id}>{data.label}</ListItem>)}
        </UnorderedList>
      <Divider />
    </VStack>
    )
}
