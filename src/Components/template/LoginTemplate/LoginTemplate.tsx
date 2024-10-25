import ImageAtom from '@/Components/atom/Image';
import './LoginTemplateStyle.scss';
import LoginForm from '@/Components/organism/LoginForm/LoginForm';
import loginImg from '@/assets/login-template.svg';

export default function LoginTemplate() {
  return (
    <div className="login-template">
      <div className="login-template__poster">
        <ImageAtom alt={'login template image'} src={loginImg} className="login-template__poster" />
      </div>
      <LoginForm />
    </div>
  );
}
