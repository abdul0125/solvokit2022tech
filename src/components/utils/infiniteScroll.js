export const InfiniteScroll={
    handleScroll : (e,newData,setLoading) => {
        const bottom =
        e.target.scrollHeight - Math.round(e.target.scrollTop) <=
        e.target.clientHeight + 10;
        console.log("infinite scroll called",bottom)
        if (bottom) {
            setLoading(true)
            newData()
        }
      }
}