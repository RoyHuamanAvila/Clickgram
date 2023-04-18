import React, { memo, useCallback, useEffect, useMemo } from 'react';
import './styles/SavePostButton.scss';
import { useToggle } from '../../hooks';
export interface SavePostButtonProps {
	saved: boolean;
}

const SavePostButton: React.FC<SavePostButtonProps> = ({ saved }) => {
	const { active, handleToggle, executeOnToggle } = useToggle(saved);

	const handleSavePost = useCallback(() => {
		executeOnToggle((active) => {
			if (active) {
				console.log('Unsaved');
			} else {
				console.log('Saved')
			}
		})
		handleToggle();
	}, [executeOnToggle, handleToggle]);

	return (
		<button className='savepostbutton' title='Save Post' onClick={handleSavePost}>
			{
				active ? <i className="bi bi-bookmark-fill"></i> : <i className="bi bi-bookmark"></i>
			}
		</button>
	);
};

export default memo(SavePostButton);
