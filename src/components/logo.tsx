import React from 'react';

interface NotepadIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const NotepadIcon: React.FC<NotepadIconProps> = ({ width = 32, height = 32, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinejoin="round"
    strokeLinecap="round"
    width={width}
    height={height}
    {...props}
  >
    {/* Notepad outline */}
    <rect x="12" y="8" width="40" height="48" rx="3" ry="3" fill="#fff" stroke="currentColor" />
    {/* Folded corner */}
    <path d="M 52 8 L 52 20 L 40 8 Z" fill="#ddd" stroke="currentColor" />
    {/* Lines on paper */}
    <line x1="18" y1="22" x2="46" y2="22" stroke="#999" />
    <line x1="18" y1="30" x2="46" y2="30" stroke="#999" />
    <line x1="18" y1="38" x2="46" y2="38" stroke="#999" />
    <line x1="18" y1="46" x2="46" y2="46" stroke="#999" />
    <line x1="18" y1="54" x2="46" y2="54" stroke="#999" />
  </svg>
);

export default NotepadIcon;
