import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import Button from '../../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/5 text-primary">
        <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: '6s' }} />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
        404 - Path Not Found
      </h1>
      <p className="text-text-secondary text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
        The coordinates you entered do not match any sanctuary, dining booth, or page in our botanical grid.
      </p>
      <div className="pt-4">
        <Link to="/">
          <Button variant="primary" className="px-6 py-2.5">
            Return to Sanctuary
          </Button>
        </Link>
      </div>
    </div>
  );
}
