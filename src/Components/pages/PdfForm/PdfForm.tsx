import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { IPdfData } from '../../../interfaces/IPdfData'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from '../MyDocument/MyDocument'
const PdfForm = () => {
	const [formData, setFormData] = useState<IPdfData>()
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IPdfData>({
		mode: 'onBlur'
	})

	const generatePdfFile = (data: IPdfData) => {
		setFormData(data)
	}
	return (
		<>
			<form onSubmit={handleSubmit(generatePdfFile)}>
				<input
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

				<div>{errors?.name?.message}</div>
				<button type='submit'>Сохранить</button>
			</form>
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
