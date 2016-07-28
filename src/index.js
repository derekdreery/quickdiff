
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { diffChars, diffTrimmedLines } from 'diff'

import './index.scss'

class App extends Component {
    constructor() {
        super();
        this.state = {
            oldText: "",
            newText: "",
            diffObject: [],

            showUnmodifiedLines: true
        }
    }

    render() {
        const { oldText, newText, diffObject,
            showUnmodifiedLines } = this.state;
        return <div className="app">
            <div className="area">
                <h1>Old text</h1>
                <textarea value={oldText} onChange={evt => {
                    this.setState({
                        oldText: evt.target.value,
                        diffObject: diffTrimmedLines(evt.target.value, newText)
                    });
                }}/>
            </div>
            <div className="area">
                <h1>New text</h1>
                <textarea value={newText} onChange={evt => {
                    this.setState({
                        newText: evt.target.value,
                        diffObject: diffTrimmedLines(oldText, evt.target.value)
                    });
                }}/>
            </div>
            <div className="area">
                <h1>Diff</h1>
                <div className="output">
                    <pre>
                        {diffObject.map((chunk, idx) => {
                            if (typeof chunk.added === 'undefined'
                                && typeof chunk.removed === 'undefined'
                                && !showUnmodifiedLines
                            ) {
                                return null;
                            }
                            return <span key={idx} className={cx({
                                added: chunk.added,
                                removed: chunk.removed
                            })}>{chunk.value}</span>
                        })}
                    </pre>
                </div>
                <label>Show unmodified lines:
                    <input type="checkbox"
                        checked={showUnmodifiedLines}
                        onChange={() => {
                            this.setState({
                                showUnmodifiedLines: !showUnmodifiedLines
                            });
                        }}
                    />
                </label>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount')
);
