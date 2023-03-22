const Loading = () => {
    return (
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-md1-12">
                    <h1>Cargando..</h1>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Loading;