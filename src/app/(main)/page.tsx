import { metaObject } from '@/config/site.config';
import PointOfSalePage from './point-of-sale/page';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  return <PointOfSalePage />;
}
