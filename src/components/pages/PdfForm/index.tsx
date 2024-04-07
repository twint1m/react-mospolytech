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
					data-testid={'input-update'}
					placeholder={'Введите ваше имя'}
					alt={'test'}
					{...register('name', {
						required: 'Поле обязательно для заполнения!',
						minLength: {
							value: 5,
							message: 'Нужно больше символов'
						}
					})}
				/>
				<input
					type='file'
					accept='image/*'
					{...register('picture', {
						required: 'Загрузите картинку!'
					})}
				/>
				{errors && <div>{errors?.name?.message}</div>}
				<Button type='submit'>Сохранить</Button>
			</Form>
			{formData && (
				<PDFDownloadLink
					document={
						<MyDocument name={formData.name} picture={formData.picture} />
					}
					fileName={`${formData.name}.pdf`}
				>
					{({ blob, url, loading, error }) =>
						loading ? 'Загрузка...' : 'Скачать'
					}
				</PDFDownloadLink>
			)}
		</>
	)
}

export default PdfForm