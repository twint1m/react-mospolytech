import {
	Wrapper,
	ErrorBox,
	ErrorBody,
	H1,
	TextWrapper,
	LinkButton
} from './styles'

const NotFound = () => {
	return (
		<Wrapper id='wrapper'>
			<ErrorBox className='error-box'>
				<ErrorBody className='error-body text-center'>
					<H1 className='text-danger'>404</H1>
					<TextWrapper>
						<h3>Страница не найдена!</h3>
						<LinkButton href='/' className='btn btn-danger btn-rounded m-b-40'>
							На главную
						</LinkButton>
					</TextWrapper>
				</ErrorBody>
			</ErrorBox>
		</Wrapper>
	)
}

export default NotFound
