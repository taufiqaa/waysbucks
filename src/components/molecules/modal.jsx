import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login() {
    return (
        <div className="lgn-form-container">
            <div className="flex jc-center ai-center">
                <h3>Login</h3>
            </div>
            <div className="flex jc-center ai-center">
                <Form>
                        <Form.Group className="mb-3 email-lgn" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3 password-lgn" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="form-btn-space d-grid gap-2">
                        <Button variant="danger" type="submit"  className="bg-red">
                        Login
                        </Button>
                </div>
            </Form>
    </div>
</div>
    );
}

export function Register() {
    return (
        <div className="rgs-form-container">
            <div className="flex jc-center ai-center">
                <h3>Register</h3>
            </div>
            <div className="flex jc-center ai-center">
                <Form>
                    <Form.Group className="mb-3 email-rgs" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3 password-rgs" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 name-rgs" controlId="formBasicName" />
                        <Form.Control type="text" placeholder="Full Name"  />
                    <div className="form-btn-space d-grid gap-2">
                        <Button variant="danger" type="submit" className="bg-red">
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
