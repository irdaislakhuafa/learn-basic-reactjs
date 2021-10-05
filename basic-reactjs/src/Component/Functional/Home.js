import Blog from "./Blog"

const Home = () => {
    return ( 
        <div >
            <h1>Ini Adalah Home wkwkwkwk</h1> 
            <Blog 
                tanggal="01 Januari 2002"
                judul="Teknologi A"
                description="Awk Awk awk awk awk awk awk awk awk awk awk awk awk sa"
            />
            <Blog 
                tanggal="02 Januari 2002"
                judul="Teknologi B"
                description="Awk Awk awk awk awk awk awk awk awk awk awk awk awk sa"
            />
            <Blog 
                tanggal="03 Januari 2002"
                judul="Teknologi C"
                description="Awk Awk awk awk awk awk awk awk awk awk awk awk awk sa"
            />
        </div>
    );
}
export default Home;