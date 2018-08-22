import React, { Component } from 'react'
import PropTypes from 'prop-types'
import metadata from 'libphonenumber-js/metadata.min.json'

import labels from '../locale/default.json'
import internationalIcon from './InternationalIcon'

import
{
	metadata as metadataPropType,
	labels as labelsPropType
}
from './PropTypes'

import PhoneInput from './PhoneInputNative'

export default class PhoneInputNativeDefaultMetadata extends Component
{
	static propTypes =
	{
		metadata : metadataPropType.isRequired,
		labels : labelsPropType.isRequired,
		internationalIcon : PropTypes.func.isRequired
	}

	static defaultProps =
	{
		metadata,
		labels,
		internationalIcon
	}

	storeInputRef = (ref) => this.input = ref
	render = () => <PhoneInput ref={this.storeInputRef} {...this.props}/>
	focus = () => this.input.focus()
}
