import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Input, Label } from 'reactstrap';
import { Badges, Image, P, SVG } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { CommonDataType } from '../../../../../Types/Application/LetterBox/LetterBox';
import { handleEnvelope, handleInterview } from '../../../../../ReduxToolkit/Reducer/LetterBoxSlice';

const SentEmailContent:React.FC<CommonDataType> = ({data,i}) => {
    const {emailOpen } = useAppSelector((state) => state.letterBox);
    const [fill,setFill] = useState(false)
    const dispatch = useAppDispatch()
    const handleValue= ()=> dispatch(handleInterview(true))
    return (
      <>
        <div className="inbox-user">
          <div className="form-check form-check-inline m-0">
            <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
            <Label check for={`emailCheckbox${i}`} />
          </div>
          <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="fill-star" onClick={() => setFill(!fill)} />
          <div className="rounded-border">
            {data.image && <Image src={dynamicImage(`user/${data.image}`)} alt="user" />}
            {data.shortName && <div className={data.color === "success" ? "circle-success" : ""}>
              <P className={`txt-${data.color}`}>{data.shortName}</P>
             </div>}
          </div>
          <P>{data.name}</P>
        </div>
        <div className="inbox-message">
          <div className="email-data">
            <span>
              {data.message}
              <span>{data.subMessage}</span>
            </span>
            {data.badge &&
              data.badge.map((item:any, i:number) => (
                <Badges color="" className={`badge-light-${item.color}`} key={i} onClick={handleValue}> {item.title} </Badges>
              ))}
          </div>
          <div className="email-timing">
            <span>{data.time}</span>
          </div>
          <div className="email-options">
            <i className={`fa fa-envelope-o envelope-1 ${emailOpen.includes(data.id) ? "hide" : "show"}`} onClick={() => dispatch(handleEnvelope(true))}/>
            <i className={`fa fa-envelope-open-o envelope-2 ${ emailOpen.includes(data.id) ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
            <i className="fa fa-trash-o trash-3" />
            <i className="fa fa-print" />
          </div>
        </div>
      </>
    );
}

export default SentEmailContent