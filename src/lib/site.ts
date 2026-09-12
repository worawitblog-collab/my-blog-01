export const SITE = {
  title: "Worawit's Blog",
  tagline: 'บันทึกความรู้คณิตศาสตร์ ฟิสิกส์ และคอมพิวเตอร์',
};

export const CATEGORIES: Record<
  string,
  { label: string; color: string; description: string; cover: string }
> = {
  math: {
    label: 'คณิตศาสตร์',
    color: '#14b8a6',
    description: 'พีชคณิต แคลคูลัส เลขคณิต และบทพิสูจน์',
    cover: '/covers/math.svg',
  },
  physics: {
    label: 'ฟิสิกส์',
    color: '#06b6d4',
    description: 'กลศาสตร์ ไฟฟ้า คลื่น และจักรวาล',
    cover: '/covers/physics.svg',
  },
  computer: {
    label: 'คอมพิวเตอร์',
    color: '#0ea5e9',
    description: 'อัลกอริทึม การเขียนโปรแกรม และวิทยาการคอมพิวเตอร์',
    cover: '/covers/computer.svg',
  },
};

const dateFormatter = new Intl.DateTimeFormat('th-TH-u-ca-buddhist', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
