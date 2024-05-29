import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from './MyDocument/MyDocument'
import { Form } from './styles'
import { Button } from '../../ui/Button'
import { useFormData } from './hook'

const PdfForm = () => {
	const { handleSubmit, generatePdfFile, register, errors, formData } =
		useFormData()
	return (
		<>
			<Form onSubmit={handleSubmit(generatePdfFile)}>
				<input
					data-testid={'input-name'}
					placeholder={'Введите ваше имя'}
					alt={'test'}
					{...register('name', {
						required: 'Поле обязательно для заполнения!'
					})}
				/>
				<input
					data-testid={'input-picture'}
					type='file'
					accept='image/*'
					{...register('picture', {
						required: 'Загрузите картинку!'
					})}
				/>
				{errors && <div>{errors?.name?.message}</div>}
				<Button data-testid={'submit-button'} type='submit'>
					Сохранить
				</Button>
			</Form>
			{formData && (
				<PDFDownloadLink
					document={
						<MyDocument name={formData.name} picture={formData.picture} />
					}
					fileName={`${formData.name}.pdf`}
				>
					{({ loading }) => (loading ? 'Загрузка...' : 'Скачать')}
				</PDFDownloadLink>
			)}
		</>
	)
}
export default PdfForm
