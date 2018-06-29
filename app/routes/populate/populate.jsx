import React, { Component } from "react"
import { connect } from "react-redux"
import NavFooter from "../shared/components/NavFooter"
import PropTypes from "prop-types"
import classNames from "classnames"
import AssignmentCard from "./components/AssignmentCard"

import {fetchAssignmentInfo} from "../../modules/assignment/actions/assignment-fetch-info"
import {setAssignmentURL} from "../../modules/assignment/actions/assignment-set-url"
import {url, error, valid, name, typeLabel} from "../../modules/assignment/selectors"

const containerStyles = {
  paddingTop: "100px"
}

const cardStyles = {
  marginTop: "75px"
}

const placeholderURL = "http://classroom.github.com/classrooms/your-org/assignments/your-assignment"

class PopulatePage extends Component {
  constructor (props) {
    super(props)
    this.loadAssignmentInfo = this.loadAssignmentInfo.bind(this)
    this.updateInput = this.updateInput.bind(this)

    var assignmentURLMessage = this.props.location.state ? this.props.location.state.assignmentURL : null
    if (assignmentURLMessage) {
      this.props.dispatchAssignmentURL(assignmentURLMessage)
      this.loadAssignmentInfo()
    }
  }

  loadAssignmentInfo () {
    this.props.dispatchAssignmentInfo()
  }

  updateInput (e) {
    this.props.dispatchAssignmentURL(e.target.value)
    this.loadAssignmentInfo() // Might get into race condition here, need to test
  }

  render () {
    const inputClasses = classNames("form-control", {"is-invalid": this.props.error})

    return (
      <div style={containerStyles}>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-sm-offset-2">
            <p className="lead text-center">Enter Assignment URL</p>
            <input value={this.props.assignmentURL}
              onChange={this.updateInput}
              placeholder={placeholderURL}
              className={inputClasses}
            />
            {this.props.error && <p className="text-danger">{this.props.error}</p>}
            <br/><br/><br/>
            {this.props.valid &&
              <AssignmentCard name={this.props.name}
                type={this.props.typeLabel}
                style={cardStyles}
              />
            }
          </div>
        </div>
        <NavFooter
          left={{
            label: "Cancel",
            route: "/"
          }}
          right={{
            label: "Next: Choose Repositories",
            route: "/select",
            onClick: this.loadAssignmentInfo,
            disabled: this.props.error
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAssignmentInfo: () => {
    dispatch(fetchAssignmentInfo())
  },
  dispatchAssignmentURL: (assignmentURL) => {
    dispatch(setAssignmentURL(assignmentURL))
  }
})

const mapStateToProps = (state) => ({
  assignmentURL: url(state),
  error: error(state),
  name: name(state),
  typeLabel: typeLabel(state),
  valid: valid(state),
})

PopulatePage.propTypes = {
  dispatchAssignmentInfo: PropTypes.func.isRequired,
  dispatchAssignmentURL: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  assignmentURL: PropTypes.string,
  error: PropTypes.string,
  valid: PropTypes.bool,
  name: PropTypes.string,
  typeLabel: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopulatePage)
