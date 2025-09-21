import Image from 'next/image'

export default function Rating() {
  return (
    <div>
        <div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <Image src="/icon-star-rating.svg" width={50} height={50} alt='star icon'/>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
        <button>Submit</button>
    </div>
  )
}
