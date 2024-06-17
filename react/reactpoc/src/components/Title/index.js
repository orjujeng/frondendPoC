import './index.css';

function Title() {
    const color = 'green'
    const title = 'This is Title components'
    let data = [1, 2, 3, 4]
    return (
        data.map((item) => {
            return <div className='title' style={{ color: color }}>
                <h1>{title} {item}</h1>
            </div>
        })

    );
}

export default Title;