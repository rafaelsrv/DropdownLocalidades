

const SearchButton= ({City}) =>{

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return(
        <div>
        
        <button onClick={() => openInNewTab(`https://pt.wikipedia.org/wiki/${City}`)}>
        Pesquisar sobre {City}
        </button>
        

        </div>
    )


}
export default SearchButton

