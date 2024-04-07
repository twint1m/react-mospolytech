import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { FC } from 'react'
import { styles } from './styles'
import { IPdfData } from '../types'

const MyDocument: FC<IPdfData> = ({ name, picture }) => {
	return (
		<>
			<Document>
				<Page size='A4' style={styles.page} wrap>
					<View style={styles.section}>
						<Text>Title</Text>
					</View>
					<View style={styles.section}>
						<Text>{name}</Text>
					</View>

					<View style={styles.section}>
						{picture && <Image source={picture} />}
					</View>
				</Page>
			</Document>
		</>
	)
}

export default MyDocument
