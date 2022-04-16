export default function AlgorithmContainer({
    children,
    title
}) {
    return (
        <>
            <div className='alg-container'>
                <h2>{title}</h2>
                {children}
            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .alg-container {
                        padding: 10px 20px;
                    }
                // All Devices Styles End
                @include media-query-phone {
                    .alg-container {
                        
                    }
                }
                @include media-query-desktop {
                    .alg-container {
                        
                    }
                }
            `}</style>
        </>
    )
}