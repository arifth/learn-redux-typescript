import * as React from "react"

type Props = { 
    saveArticle: (article: IArticle | any) => void

}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
    const [article, setArticle] = React.useState<IArticle | {}>()
  
    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
      setArticle({
        ...article,
        [e.currentTarget.id]: e.currentTarget.value,
      })
    }
     const addNewArticle = (e: React.FormEvent) => {
      e.preventDefault()
      saveArticle(article)
    }

    return (
    <form onSubmit={addNewArticle} className="addArticle">
        <input 
            type="text"
            id="title"
            placeholder = "Title"
            onChange={handleArticleData}
        />
        <input type="text" />
        <button>add Article </button>
    </form>
)
}
  
   

