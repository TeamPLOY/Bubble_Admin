import * as S from './style';

export const Header = () => {
	return (
		<>
			<S.HeaderLayout>
				<S.HeaderLogo>로고</S.HeaderLogo>
				<S.HeaderButton>
					<S.HeaderLogin>로그인</S.HeaderLogin>
				</S.HeaderButton>
			</S.HeaderLayout>
		</>
	);
};
