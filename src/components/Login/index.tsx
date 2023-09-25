import { Col, Row, Form, Input,Button, message } from "antd"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router-dom"
import "./styles.scss"


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish(values:{email:string, password:string}) {
        try{
            await auth.authenticate(values.email, values.password)

            navigate('/profile')
        }
        catch(error){
            message.error('Email or password is not valid')
        }
    }

    return (
        <Row
        justify='center'
        align='middle'
        style={{
            height: '100vh',
        }}
        >
            <Col span={12}>
                <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                >
                    <Form.Item
                    label="Email"
                    name="email"
                    
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset:14}}>
                        <Button type="primary" htmlType="submit">
                            SignIn
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}