import JSONPretty from "react-json-pretty";
import Image from "next/image";
import { useState } from "react";

const ReqResWrapper = ({ heading, endpoint, id, note, impNote, reqOptions, cutOutput, output, lastNote }) => {

    const [showOutput, setShowOutput] = useState(false);
    const [btnText, setBtnText] = useState('Show Output');

    const outputHandler = () => {
        if (showOutput) { setShowOutput(false); setBtnText('Show Output') }
        else {
            setBtnText('Hide Output')
            setShowOutput(true)
        }
    }

    return (
        <div>
            <h3 id={id} className="text-2xl text-medium mb-2">
                {heading}
            </h3>

            {impNote ? <div className="mb-2 font-medium">
                <span className="relative top-1.5 mr-1"><Image src="/exclamation-mark.png" alt="!" width="25" height="25" /> </span>
                {impNote}</div> : null
            }
            {note ?
                <div className="mb-2">
                    <span className="relative top-1.5"><Image src="/sticky-notes.png" alt="📝" width="25" height="25" /> </span>
                    {note}
                </div>
                : null
            }

            {/* -------------------------------------------------------------------------------------------------------------------------- */}

            <section className="mb-14">
                <div className="mb-5 bg-gray-200 rounded-md p-4 overflow-x-scroll md:overflow-x-hidden">
                    <div className="mb-4">
                        <>
                            fetch(&quot;https://fakestores.herokuapp.com/api{endpoint}&quot;, {'{'} <br />
                            <div className="ml-6">
                                {/* {reqOptions.method.toUpperCase() !== "GET" && <>
                                    method: '{reqOptions.method.toUpperCase()}', <br />
                                </>} */}
                                method: &apos;{reqOptions.method.toUpperCase()}&apos;, <br />
                                {
                                    reqOptions.headers !== null
                                        ? <> headers: {'{'} <br />
                                            &emsp;&emsp;&quot;Accept&quot;: &quot;application/json&quot;, <br />
                                            &emsp;&emsp;&quot;Content-Type&quot;: &quot;application/json&quot;, <br />
                                            &emsp;&emsp;{
                                                    reqOptions.headers.Authorization 
                                                    ? <> &quot;Authorization&quot;: &quot;Bearer b3efbc4b-f835-4909-ae67-223e9d96d626&quot; <br /> </>
                                                    : null
                                                }
                                            {'}'}, <br />
                                        </>
                                        : null
                                }
                                {
                                    reqOptions.body ?
                                        <>body: JSON.stringify{'('}
                                            <JSONPretty className="ml-4" id="json-pretty" data={reqOptions.body} />
                                            {')'}
                                        </>
                                        : null
                                }
                            </div>
                            {'}'}
                            ).then(res=&gt; res.json()) <br />
                            &nbsp;&nbsp;.then(result=&gt; console.log(result)) <br />
                        </>
                    </div>
                </div>
                {
                    lastNote ? <div className="mb-4 font-semibold">
                        {lastNote}
                    </div> : null
                }
                <div>
                    {
                        <button className="flex items-center w-max text-white py-2 px-6 mb-5 bg-indigo-500 rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-gray-100  text-xs font-medium text-lg"
                            onClick={() => outputHandler()}
                        >
                            {btnText}
                        </button>
                    }
                </div>
                {
                    showOutput
                        ? cutOutput
                            ? <div className="mt-5 rounded-md bg-gray-200 p-4 overflow-y-auto" >
                                {'['}
                                <div className="ml-5">
                                    <JSONPretty className="" id="json-pretty" data={output[0]} />
                                    <br /><span className="font-semibold">{'/* ... */'}</span>
                                    <br /> <br />
                                    <JSONPretty className="" id="json-pretty" data={output[1]} />
                                </div>
                                {']'}
                            </div>
                            : <div className="mt-5 rounded-md bg-gray-200 p-4 overflow-x-auto">
                                <JSONPretty className="" id="json-pretty" data={output} />
                            </div>
                        : null
                }
            </section>
        </div>
    )
}

export default ReqResWrapper


{/* 

doRequest === "false"
                            ? <div className="mt-5 rounded-md bg-gray-200 p-4 overflow-x-auto">
                                <code>
                                    <JSONPretty data={output} />
                                </code>
                            </div>
                            :
                            outputType === 'obj'
                                ? (<div className="mt-5 rounded-md bg-gray-200 p-4 overflow-x-auto">
                                    {
                                        outputObj !== {}
                                            ? <JSONPretty id="json-pretty" data={outputObj} />
                                            : <><span className="text-gray-200 text-lg">Loading...</span>
                                                {console.log("empty")}
                                            </>
                                    }
                                </div>)
                                : (<div className="mt-5 rounded-md bg-gray-200 p-4 overflow-x-auto ">
                                    {
                                        outputArray === []
                                            ? (<><span className="text-gray-200 text-lg">Loading...</span>
                                                {console.log("empty")}
                                            </>)
                                            : outputArray.length > 3
                                                ? (<code>
                                                    {
                                                        (endpoint !== "/categories" && !httpMethod)
                                                            ? <div key={endpoint}> {'['}
                                                                <div className="ml-5">
                                                                    {<>
                                                                        <JSONPretty id="json-pretty" data={outputArray[0]} />
                                                                        <span className="text-gray-600">/*...*/
    {/*                                                                          </span >
                                                                     <JSONPretty id="json-pretty" data={outputArray[outputArray.length - 1]} />
                                                                    </>
                                                                    }
                                                                </div>
                                                                {']'} </div>
                                                            : <div className="ml-5">
                                                                {
                                                                    endpoint === "/categories"
                                                                        ? <JSONPretty id="json-pretty" data={outputArray} />
                                                                        : <>
                                                                            <JSONPretty id="json-pretty" data={outputArray[0]} />
                                                                            <span className="text-gray-600">/*...*/
        {/*                                                                               </span>
                                                                          <JSONPretty id="json-pretty" data={outputArray[outputArray.length - 1]} />
                                                                       </>
                                                                }
                                                            </div>
                                                    }
                                                </code>)
                                                : <JSONPretty id="json-pretty" data={outputArray} />
                                    }
                                </div>)

                                */}
    }
}
