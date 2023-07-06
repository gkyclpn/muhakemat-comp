import styled from "styled-components";

const Modal = ({
    size,
    title = null,
    content,
    customContent,
    footer = null,
    type = "normal",
    close,
    justifyFooterContent = "space-between",
    className,
}) => {
    return (
        // popup class ı bu modal ın içerisinde ki elementlere tıklamayı yakalamak için verildi. Dışarı tıklanıldığında modalın kapanması için bu gereklidir.
        // props.className e gelmesi gereken toplamda 2 class vardır 'popup-active' ve 'popup-passive'. Bunları global css e tanımladım. Bunları her yerde kullanabiliriz.
        // Daha sağlıklı bir yöntemde izlenebilirdi. Mesela dışarı tıklama olayını App.js in içerisine tanımlayarak ama şuan ki yapıda çok değişiklik yapmam gerektiği için
        // bu şekilde bir çözüm uyguladım. Artık modal açılmasını 2 farklı şekilde kullabiliyoruz. Bu sayede diğer sayfalarda ki modallar etkilenmeyecek. Eğer class ile kullanırsak
        // daha yumşak açılma ve kapanma görseli oluşacak ve aynı zamanda bizi {} kirliliğinden kurtaracak.
        <Overlay className={`popup ${className}`}>
            <Container size={size}>
                <Header>
                    {
                        type === "normal" ? (
                            <span>{title}</span>
                        ) :
                        (
                            <span></span>
                        )
                    }
                    <a onClick={() => close()}>
                        X
                    </a>
                </Header>
                <Content customContent={customContent} type={type}>{content}</Content>
                {
                    type === "normal" ?
                    <Footer justifyFooterContent={justifyFooterContent}>
                        {footer}
                    </Footer>
                    :
                    <Footer></Footer>
                }
                
            </Container>
        </Overlay>
    );
};

const Overlay = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 99;
    background: #13192140 0% 0% no-repeat padding-box;
    overflow-y: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) =>
        props.size === "xxl"
            ? "860px;"
            : props.size === "xl"
            ? "760px;"
            : props.size === "l"
            ? "450px;"
            : "330px;"};
    height: auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 5px;
    box-shadow: 0px 15px 30px #06090f1a;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        padding: 20px 17px;
        font-weight: 800;
    }

    & > a {
        padding-right: 10px;
        cursor: pointer;

        & > i {
            font-size: 32px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.type === "normal" ? "left" : "center")};
    padding: ${(props) => (props.customContent ? "Opx" : "30px")};
    border-top: ${(props) => (props.type === "normal" ? "1px" : "0px")} solid #ecedef;
    border-bottom: ${(props) => (props.type === "normal" ? "1px" : "0px")} solid #ecedef;
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    & > form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        & > fieldset {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyFooterContent};
    gap: 20px;
    padding: 20px;
`;

export default Modal;
