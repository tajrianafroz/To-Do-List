import React from 'react';

const Nothing = ({noTask}) => {
    return (
      <tbody>
        <tr className="text-center">
          <td colSpan={4}>No task has been found</td>
        </tr>
      </tbody>
    );
};

export default Nothing;